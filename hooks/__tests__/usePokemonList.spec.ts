import { act, renderHook } from "@testing-library/react-hooks";
import * as servicesApi from "@/api/services";
import * as favouritesApi from "@/contexts/useFavourites";
import { usePokemonList } from "@/hooks/usePokemonList";
import { ListItem, PagedItemsResponse } from "@/api/types";
import { FavouritesContextType } from "@/contexts/FavouritesContext";

jest.mock("@/contexts/useFavourites", () => ({
  useFavourites: jest.fn(),
}));

describe("usePokemonList", () => {
  const mockFavourites: ListItem[] = [
    { id: 1, name: "Bulbasaur" },
    { id: 2, name: "Ivysaur" },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(favouritesApi, "useFavourites").mockReturnValue({
      favourites: mockFavourites,
    } as unknown as FavouritesContextType);
  });

  it("should fetch items on mount", async () => {
    const mockResponse = {
      data: {
        results: [{ id: 3, name: "Venusaur" }],
      },
    };
    const spy = jest
      .spyOn(servicesApi, "getPagedPokemonList")
      .mockResolvedValueOnce(
        mockResponse as unknown as
          | { data: PagedItemsResponse }
          | { error: any },
      );

    const { result, waitForNextUpdate } = renderHook(() => usePokemonList());

    await waitForNextUpdate();

    expect(spy).toHaveBeenCalledWith({
      limit: 20,
      offset: 0,
    });
    expect(result.current.items).toEqual([{ id: 3, name: "Venusaur" }]);
    expect(result.current.isLoading).toBe(false);
  });

  it("should toggle filter", () => {
    const { result } = renderHook(usePokemonList);

    act(() => {
      result.current.toggleFilter();
    });

    expect(result.current.isFilterEnabled).toBe(true);
    expect(result.current.items).toEqual(mockFavourites);
  });

  it("should load next page of items", async () => {
    const mockResponse = {
      data: {
        results: [{ id: 3, name: "Venusaur" }],
      },
    };
    const spy = jest
      .spyOn(servicesApi, "getPagedPokemonList")
      .mockResolvedValueOnce(
        mockResponse as unknown as
          | { data: PagedItemsResponse }
          | { error: any },
      );

    const { result, waitForNextUpdate } = renderHook(() => usePokemonList());

    await waitForNextUpdate();

    expect(spy).toHaveBeenCalledWith({
      limit: 20,
      offset: 0,
    });
    expect(result.current.items).toEqual([{ id: 3, name: "Venusaur" }]);
    expect(result.current.isLoading).toBe(false);
  });

  it("should handle no data response gracefully", async () => {
    jest
      .spyOn(servicesApi, "getPagedPokemonList")
      .mockResolvedValueOnce({ data: null } as any);

    const { result } = renderHook(() => usePokemonList());

    expect(result.current.items).toBeUndefined();
  });
});
