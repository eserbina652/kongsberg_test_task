import { renderHook, act } from "@testing-library/react-hooks";
import { useNavigate } from "react-router-dom";
import {
  BreadcrumbProvider,
  useBreadcrumbContext,
} from "./useBreadcrumbContext";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("BreadcrumbProvider", () => {
  beforeEach(() => {
    // @ts-ignore
    useNavigate.mockClear();
  });
  it("should add breadcrumb and navigate to route", () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    const { result } = renderHook(() => useBreadcrumbContext(), {
      wrapper: BreadcrumbProvider,
    });

    act(() => {
      // @ts-ignore
      result.current.addBreadcrumb("/route", {});
    });
    // @ts-ignore
    expect(result.current.breadcrumbs).toEqual(["/route"]);
    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith("/route", {});
  });
  it("should not add duplicate breadcrumb", () => {
    const navigateMock = jest.fn();
    // @ts-ignore
    useNavigate.mockReturnValue(navigateMock);

    const { result } = renderHook(() => useBreadcrumbContext(), {
      wrapper: BreadcrumbProvider,
    });

    act(() => {
      // @ts-ignore
      result.current.addBreadcrumb("/route", {});
      // @ts-ignore
      result.current.addBreadcrumb("/route", {});
    });
    // @ts-ignore
    expect(result.current.breadcrumbs).toEqual(["/route"]);
    expect(navigateMock).toHaveBeenCalledTimes(2);
    expect(navigateMock).toHaveBeenCalledWith("/route", {});
  });

  it("should go to selected breadcrumb", () => {
    const navigateMock = jest.fn();
    // @ts-ignore
    useNavigate.mockReturnValue(navigateMock);

    const { result } = renderHook(() => useBreadcrumbContext(), {
      wrapper: BreadcrumbProvider,
    });

    act(() => {
      // @ts-ignore
      result.current.addBreadcrumb("/route1", {});
      // @ts-ignore
      result.current.addBreadcrumb("/route2", {});
      // @ts-ignore
      result.current.goToSelectedBreadcrumb("/route1");
    });
    // @ts-ignore
    expect(result.current.breadcrumbs).toEqual(["/route1"]);
    expect(navigateMock).toHaveBeenCalledTimes(3);
    expect(navigateMock).toHaveBeenCalledWith("/route1");
  });
});
