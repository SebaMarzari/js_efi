import "./404NotFound.css"
import { useTranslation } from "react-i18next"

const NotFound = () => {
    const { t } = useTranslation()
    return (
        <div className="NotFoundStyle">
            <h1>{t("404Page")}</h1>
            <p>
                {t("404Message")}
            </p>
        </div>
    )
}

export default NotFound