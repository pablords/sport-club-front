//@ts-nocheck

import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
import { setToken, isAuthenticated, getToken, logout } from "@mfe/auth";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name, mountParcel, singleSpa }) {
    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();


registerApplication({
  name: 'Login',
  app: () => import('@mfe/login'),
  activeWhen: '/login',
  customProps: {
    isAuthenticated: isAuthenticated,
    setToken: setToken,
    getToken: getToken,
    logout: logout
  }
});


registerApplication({
  name: 'Partners',
  app: () => import('@mfe/partners'),
  activeWhen: '/partners',
  customProps: {
    isAuthenticated: isAuthenticated,
  }
});


start();
