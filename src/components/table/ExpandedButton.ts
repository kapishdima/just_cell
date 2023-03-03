import { h } from "vue";

export const expandedButton = (
  value: string,
  isExpanded: boolean,
  onClick: any
) => {
  return h("div", { class: "table-expanded__column" }, [
    h(
      "button",
      {
        class: `table-expanded__button ${isExpanded ? "expanded" : ""}`,
        // onClick,
      },
      [h("img", { src: require("@/assets/icons/chevron-right.svg") })]
    ),
    value,
  ]);
};
