import React from "react";
import { Column } from "./Column";

const COLUMNS_INFO = [
  { titleBg: "bg-primary", title: "Funnel" },
  { titleBg: "bg-info", title: "Analyzing" },
  { titleBg: "bg-success", title: "Backlog" },
  { titleBg: "bg-secondary", title: "Trash" },
];

export const Board = () => {
  return (
    <div className="p-4">
      <div className="row gx-4">
        {COLUMNS_INFO.map((column) => (
          <div className="col-3">
            <Column {...column} />
          </div>
        ))}
      </div>
    </div>
  );
};
