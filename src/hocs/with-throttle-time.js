import React, { useEffect, useState } from "react";

import { Subject, timer, interval } from "rxjs";
import { repeat, throttleTime, take } from "rxjs/operators";

export default (time) => {
  //emit value every 1s
  const source = interval(1000);
  //after 5 seconds, emit value
  const delayForFiveSeconds = () => timer(1000);
  //when timer emits after 5s, complete source
  //  const takeObservable$ = source.pipe(takeUntil(timer$));

  const takeObservable$ = new Subject().pipe(throttleTime(2000));

  return (WrappedComponent) => (props) => {
    const [takeState, setTakeState] = useState("");

    const onTakeStateChange = (data) => {
      takeObservable$.next(data);
    };

    useEffect(() => {
      const observer = {
        next: (data) => setTakeState(data),
        complete: (data) => console.log("take:[complete]")
      };

      takeObservable$.subscribe(observer);

      // clean-up
      return () => {
        takeObservable$.unsubscribe();
      };
      // eslint-disable-next-line
    }, []);

    return (
      <WrappedComponent
        {...props}
        onThrottleStateChange={onTakeStateChange}
        throttleState={takeState}
      />
    );
  };
};
