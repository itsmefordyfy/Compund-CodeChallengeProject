import { ProjectionScreen } from './screens/UnauthenticatedScreens/ProjectionScreen/index';
import { LandingScreen } from './screens/UnauthenticatedScreens/LandingScreen/index';
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export declare type Icon = {
  name: string;
  type:
    | "antdesign"
    | "entypo"
    | "evilicon"
    | "feather"
    | "font-awesome"
    | "font-awesome-5"
    | "fontisto"
    | "foundation"
    | "ionicon"
    | "material"
    | "material-community"
    | "octicon"
    | "simple-line-icon"
    | "zocial";
  size: number;
};

export declare type Screens = {
  name: string;
  component: React.FC<any>;
  options?: {
    icon?: Icon;
    headerShown?: boolean;
  };
}[];

export declare type UnauthenticatedStackParamsList = {
  LandingScreen: undefined;
  Projection: undefined;
};

