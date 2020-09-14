import React from "react";

export default (WrappedComponent) => (props) => (
  <div className="rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 px-3 py-10 bg-gray-200 flex justify-center">
    <WrappedComponent {...props} />
  </div>
);
