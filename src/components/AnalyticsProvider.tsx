"use client";

import { useEffect } from "react";
import ReactGA from "react-ga4";
import { usePathname } from "next/navigation";

export default function AnalyticsProvider() {
  const pathname = usePathname();

  useEffect(() => {
    ReactGA.initialize("G-G1DBH0K86R");
  }, []);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: pathname });
  }, [pathname]);

  return null;
}
