import Amplify from "aws-amplify";
import config from "../aws-exports";

export const onClientEntry = () => {
  Amplify.configure(config);
};
