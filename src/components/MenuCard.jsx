import * as React from "react";
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";

export default function MenuCard({ image, name, price, description, category }) {
  // Limit the description to 15 words max
  const words = description.split(" ");
  const limitedDescription = words.slice(0, 15).join(" ") + (words.length > 15 ? "..." : "");

  return (
    <Card
      sx={{
        maxWidth: 345,
        minHeight: 400,
        bgcolor: "#ece6d3",
        color: "#333333",
        borderRadius: "12px",
        boxShadow: "1 4px 12px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            variant="rounded"
            sx={{
              bgcolor: "#6f635b",
              color: "#ffffff",
              borderRight: "5px solid #DDDDDD",
              fontWeight: "bold",
            }}
            aria-label="price"
          >
            {`$${price}`}
          </Avatar>
        }
        title={name}
        subheader={"Hidangan " + category}
        titleTypographyProps={{ fontSize: "18px", fontWeight: "bold", color: "#020203" }}
        subheaderTypographyProps={{ fontSize: "14px", color: "#999999" }}
        sx={{ paddingBottom: 2 }}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={name}
        sx={{ objectFit: "cover", borderRadius: "1px" }}
      />
      <CardContent>
        <Typography variant="body2" color="#020203" sx={{ marginBottom: 2 }}>
          {limitedDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}
