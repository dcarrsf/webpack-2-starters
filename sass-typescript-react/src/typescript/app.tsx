import * as React from "react";
import { render } from "react-dom";
import '../sass/app.scss';

import { Hello } from "./components/Hello";

render(
   <Hello compiler="TypeScript" framework="React" />,
   document.getElementById("app")
);
