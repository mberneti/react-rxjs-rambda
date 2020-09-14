import { compose } from "rambda";

import withDebounceTime from "./with-debounce-time";
import withTakeUntilTime from "./with-take-time";
import withThrottleUntilTime from "./with-throttle-time";
import withLayout from "./with-layout";

const page = compose(
  withTakeUntilTime(2000),
  withThrottleUntilTime(2000),
  withDebounceTime(300),
  withLayout
);

export default page;
