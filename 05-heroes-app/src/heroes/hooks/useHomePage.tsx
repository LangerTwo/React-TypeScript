import { use, useMemo } from "react";
import { useSearchParams } from "react-router";
import { FavoriteHeroContext } from "../context/FavoriteHeroContext";

export const useHomePage = () => {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const { favoriteCount, favorites } = use(FavoriteHeroContext)

    const activeTab = searchParams.get('tab') ?? 'all';
    const page = searchParams.get('page') ?? '1';
    const limit = searchParams.get('limit') ?? '6';
    const category = searchParams.get('category') ?? 'all';

    const selectedTab = useMemo(() => {
        const validTabs = ['all', 'favorites', 'heroes', 'villains'];
        return validTabs.includes(activeTab) ? activeTab : 'all';
  }, [activeTab]);

    return {
        setSearchParams,
        page,
        limit,
        selectedTab,
        category,
        favoriteCount,
        favorites,
    };
}