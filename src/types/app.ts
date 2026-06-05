import { ReactNode } from "react";
import { RouteProps } from "react-router-dom";

export type AppPath = `/${string}`;

export type AppRoute = {
  path: AppPath;
  element: ReactNode;
  props?: RouteProps;
};

export type AppRoutes = Array<AppRoute>;

export type MeetupEvent = {
  date: string;
  time?: string;
  name?: string;
  description?: string;
  venue?: string;
  image?: string;
};

export type EventsFile = {
  events: MeetupEvent[];
};
