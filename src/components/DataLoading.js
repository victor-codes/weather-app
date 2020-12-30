import React from "react";

export default function DataLoading(Component) {
  return function WithDataLoading({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;

    return (
      <p style={{ textAlign: "center", fontSize: "30px" }}>
        Hold on, fetching data may take some time :)
      </p>
    );
  };
}
