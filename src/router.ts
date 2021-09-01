import { initHome } from "../pages/home";
import { initResults } from "../pages/results";
import { initStep1Inspector } from "../pages/step-1-inspector";
import { initStep2Inspector } from "../pages/step-2-inspector";
import { initStep3Inspector } from "../pages/step-3-inspector";
import { initStep4Inspector } from "../pages/step-4-inspector";
import { initStep5Inspector } from "../pages/step-5-inspector";
import { initStep6Inspector } from "../pages/step-6-inspector";
import { initStep7Inspector } from "../pages/step-7-inspector";
import { initStep8Inspector } from "../pages/step-8-inspector";
import { initStep9Inspector } from "../pages/step-9-inspector";

const routes = [
  {
    path: /\/home/,
    page: initHome,
  },
  {
    path: /\/step-1-inspector/,
    page: initStep1Inspector,
  },
  {
    path: /\/step-2-inspector/,
    page: initStep2Inspector,
  },
  {
    path: /\/step-3-inspector/,
    page: initStep3Inspector,
  },
  {
    path: /\/step-4-inspector/,
    page: initStep4Inspector,
  },
  {
    path: /\/step-5-inspector/,
    page: initStep5Inspector,
  },
  {
    path: /\/step-6-inspector/,
    page: initStep6Inspector,
  },
  {
    path: /\/step-7-inspector/,
    page: initStep7Inspector,
  },
  {
    path: /\/step-8-inspector/,
    page: initStep8Inspector,
  },
  {
    path: /\/step-9-inspector/,
    page: initStep9Inspector,
  },
  {
    path: /\/results/,
    page: initResults,
  },
  {
    path: /\/atiendo-boludos-q\/home/,
    page: initHome,
  },
  {
    path: /\/atiendo-boludos-q\/step-1-inspector/,
    page: initStep1Inspector,
  },
  {
    path: /\/atiendo-boludos-q\/step-2-inspector/,
    page: initStep2Inspector,
  },
  {
    path: /\/atiendo-boludos-q\/step-3-inspector/,
    page: initStep3Inspector,
  },
  {
    path: /\/atiendo-boludos-q\/step-4-inspector/,
    page: initStep4Inspector,
  },
  {
    path: /\/atiendo-boludos-q\/step-5-inspector/,
    page: initStep5Inspector,
  },
  {
    path: /\/atiendo-boludos-q\/step-6-inspector/,
    page: initStep6Inspector,
  },
  {
    path: /\/atiendo-boludos-q\/step-7-inspector/,
    page: initStep7Inspector,
  },
  {
    path: /\/atiendo-boludos-q\/step-8-inspector/,
    page: initStep8Inspector,
  },
  {
    path: /\/atiendo-boludos-q\/step-9-inspector/,
    page: initStep9Inspector,
  },
  {
    path: /\/atiendo-boludos-q\/results/,
    page: initResults,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.page({ goTo: goTo });
        container.firstChild?.remove();
        container.appendChild(el);
      }
    }
  }

  if (location.pathname == "/") {
    goTo("/home");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
