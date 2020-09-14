import React, { useState } from "react";

import page from "./hocs/page";

function App({
  debounceState,
  onDebounceStateChange,
  takeState,
  onTakeStateChange,
  throttleState,
  onThrottleStateChange
}) {
  const [state, setState] = useState("");

  const debounce = (e) => {
    const search = e.target.value;
    setState(search);
    onDebounceStateChange(search);
    onTakeStateChange(search);
    onThrottleStateChange(search);
  };

  return (
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Search by username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="usernameunjmk"
            type="text"
            placeholder="Username"
            onChange={debounce}
            value={state}
          />
        </div>
        <div class="mb-6">
          <p class="block text-gray-500 text-sm mb-4">
            `{debounceState}` //debounce
            <br /> `{takeState}` //take
            <br /> `{throttleState}` //throttle
          </p>
          <ol class="list-decimal list-inside">
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
          </ol>

          <p class="text-green-600 text-xs italic">500 record found.</p>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
}

export default page(App);
