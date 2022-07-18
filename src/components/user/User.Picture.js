import { Column, Fragment, Img } from "@riadh-adrani/recursive-web/html";
import { Var } from "../../util/Style";
import CenteredColumn from "../utils/CenteredColumn";

export default ({ img, size = "32.5px", children = null, ...props }) => {
    const normal = { height: size, width: size, borderRadius: "50%" };

    return CenteredColumn({
        ...props,
        children: [
            img
                ? Img({
                      src: img,
                      style: {
                          scoped: true,
                          normal,
                      },
                  })
                : Column({
                      style: {
                          scoped: true,
                          normal: {
                              ...normal,
                              backgroundColor: Var("main3"),
                          },
                      },
                  }),
            Fragment({ children }),
        ],
    });
};
