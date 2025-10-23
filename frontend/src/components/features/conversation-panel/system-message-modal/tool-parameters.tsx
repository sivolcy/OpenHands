import { useTranslation } from "react-i18next";
import ReactJsonView from "@microlink/react-json-view";
import { JSON_VIEW_THEME } from "#/utils/constants";
import { Typography } from "#/ui/typography";

interface ToolParametersProps {
  parameters: Record<string, unknown>;
}

export function ToolParameters({ parameters }: ToolParametersProps) {
  const { t } = useTranslation();

  return (
    <div className="mt-2">
      <Typography.Text className="text-sm font-semibold text-gray-700">
        {t("SYSTEM_MESSAGE_MODAL$PARAMETERS")}
      </Typography.Text>
      <div className="text-sm mt-2 p-3 bg-gray-100 rounded-md overflow-auto text-gray-700 max-h-[400px] shadow-inner">
        <ReactJsonView name={false} src={parameters} theme={JSON_VIEW_THEME} />
      </div>
    </div>
  );
}
