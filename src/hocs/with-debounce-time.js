import React, { useEffect, useState } from "react";

import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

export default (time) => {
  const debounceObservable$ = new Subject().pipe(debounceTime(time));

  return (WrappedComponent) => (props) => {
    const [debounceState, setDebounceState] = useState("");

    const onDebounceStateChange = (data) => {
      debounceObservable$.next(data);
    };

    useEffect(() => {
      const observer = {
        next: (data) => setDebounceState(data),
        complete: (data) => console.log("[complete]")
      };

      debounceObservable$.subscribe(observer);

      // clean-up
      return () => {
        debounceObservable$.unsubscribe();
      };
      // eslint-disable-next-line
    }, []);

    return (
      <WrappedComponent
        {...props}
        onDebounceStateChange={onDebounceStateChange}
        debounceState={debounceState}
      />
    );
  };
};
