import { useSelector } from "react-redux";
import { Header, Main } from ".";
import { LeftPanel } from "@/components/panels/LeftPanel";
import { RightPanel } from "@/components/panels/RightPanel";
import type { FC, ReactNode } from "react";
import type { RootState } from "@/libs/stores";
import { SplashScreen } from "../SplashScreen";

type Props = {
  children: ReactNode;
};

/* ------------------------------ Start ------------------------------*/
export const DashboardLayout: FC<Props> = (props) => {
  const { children } = props;
  const { panels, showSplash } = useSelector(
    (state: RootState) => state.layout
  );

  return showSplash ? (
    <SplashScreen />
  ) : (
    <>
      <Header />
      <Main>{children}</Main>
      {panels.right.visible && <RightPanel />}
      {panels.left.visible && <LeftPanel />}
    </>
  );
};
