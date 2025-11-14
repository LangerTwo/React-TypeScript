import { heroApi } from "../api/hero.api";
import type { SummaryInformatioResponse } from "../types/summary-information.response";

export const getSummaryAction = async() => {

    const { data } = await heroApi.get<SummaryInformatioResponse>('/summary')

    return data;
};