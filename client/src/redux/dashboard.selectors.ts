import { Selector } from 'react-redux';
import { DashboardState, TAddWidgetModalState } from './type';
import { TRow } from '../common/type.def';
import { createSelector } from 'reselect';

export const selectRows: Selector<DashboardState, TRow[]> = createSelector(
    [(state: DashboardState) => state.rows],
    (rows: TRow[]) => rows,
);

export const selectIsEditMode: Selector<DashboardState, boolean> = createSelector(
    [(state: DashboardState) => state.edit],
    (edit: boolean) => edit,
);

export const selectAddWidgetModalState: Selector<DashboardState, TAddWidgetModalState> = createSelector(
    [(state: DashboardState) => state.addWidgetModal],
    (addWidgetModalState: TAddWidgetModalState) => addWidgetModalState,
);

export const selectIsAddRowModalOpen: Selector<DashboardState, boolean> = createSelector(
    [(state: DashboardState) => state.addRowModalOpen],
    (addRowModalOpen: boolean) => addRowModalOpen,
);
