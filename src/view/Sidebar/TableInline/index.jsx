import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { API_URL } from "../../../consts";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  LinearProgress,
  Typography,
} from "@mui/material";
import { WarningAmber } from "@mui/icons-material";
import { fetchJson } from "../../../utils";


const FEATURES_EXCLUDED = ["country.summary", "visa.required"];

const InlineTable = ({ headers, rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {headers &&
              headers.map((header, i) => (
                <TableCell align={i === headers.length - 1 ? "right" : "left"}>
                  {header}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow
              key={`index-${rowIndex}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {row.map((cell, i) => (
                <TableCell key={`index-${rowIndex}-${i}`}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default function TableInline({ country }) {
  const [allFeatures, setAllFeatures] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [currentFeatures, setCurrentFeatures] = useState([]);
  const [currentSummary, setCurrentSummary] = useState(null);
  const [requiresVisa, setRequiresVisa] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetchJson(`${API_URL}/features`),
      fetchJson(`${API_URL}/countries`),
    ]).then(([features, countries]) => {
      setLoading(false);
      features = features.filter(
        (item) => !FEATURES_EXCLUDED.includes(item.property)
      );
      setAllFeatures(features);
      setCurrentFeatures(features);
      setAllCountries(countries);
    });
  }, []);
  useEffect(() => {
    if (country) {
      const countryMatch = allCountries.find(
        (currentCountry) => currentCountry.country_code_3 === country.code
      );

      if (countryMatch) {
        setLoading(true);
        fetchJson(
          `${API_URL}/countries/features/?${new URLSearchParams({
            country_id: countryMatch.id,
          })}`
        ).then((countryFeatures) => {
          setLoading(false);

          setRequiresVisa(null);
          setCurrentSummary(null);

          let result = allFeatures.reduce((prev, next) => {
            next.value = null;
            prev[next.id] = next;
            return prev;
          }, {});
          for (let feature of countryFeatures) {
            if (feature.feature?.property) {
              if (
                feature.feature?.property.match(
                  /price|salary|vage|revenue|purchase_min|rental_min/
                )
              ) {
                feature.value = `${parseInt(feature.value) / 100} €`;
              } else
                switch (feature.feature.property) {
                  case "visa.required":
                    setRequiresVisa(1);
                    continue;
                  case "country.summary":
                    setCurrentSummary(feature.value);
                    continue;
                  default:
                    break;
                }
            }

            result[feature.feature?.id] = {
              id: feature.feature?.id,
              name: feature.feature?.name,
              value: feature.value,
            };
          }
          setCurrentFeatures(Object.values(result));
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  //TODO:
  //Summary
  // Payment methods available (with “create wallet” link where possible).
  // Approximate expenses calculation based on current residence country (ideally also utilizing data, filled in form)
  // Is visa required
  // Visa types available including simplified cases e.g. PBH, digital nomads, etc.)
  // Visa application generation helper

  return (
    <Paper>
      <Typography variant="h3">{country?.name || null}</Typography>
      {loading && <LinearProgress />}

      {currentSummary && (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Summary
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {currentSummary}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      )}

      <InlineTable
        rows={currentFeatures.map(({ name, value }) => [name, value])}
      />

      {requiresVisa && (
        <div>
          <br />
          <Typography>
            <WarningAmber />
            Requires visa
          </Typography>
          <Button variant="outlined">Generate application</Button>
        </div>
      )}
    </Paper>
  );
}
