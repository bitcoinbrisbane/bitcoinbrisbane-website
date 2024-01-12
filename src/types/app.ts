import { ReactNode } from "react";
import { RouteProps } from "react-router-dom";

export type AppPath = `/${string}`;

export type AppRoute = {
  path: AppPath;
  element: ReactNode;
  props?: RouteProps;
};

export type MeetupEvent = {
  data: [
    {
      id: string;
      attributes: {
        name: string;
        description: string;
        date: string;
        time: string;
        venue: string;
        photo: {
          data: {
            attributes: {
              formats: {
                large: {
                  url: string;
                };
              };
            };
          }[];
        };
      };
    }
  ];
};

export type AppRoutes = Array<AppRoute>;
