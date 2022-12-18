import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"

import { TRootState, TAppDispatch } from "./../store/index"

export const useAppDispatch: () => TAppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector
