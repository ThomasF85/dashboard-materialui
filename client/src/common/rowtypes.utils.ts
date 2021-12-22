import { TColumn, TRow, TRowType, WidgetType } from './type.def';
import { randomId } from './utils';
import rowType1PNG from '../assets/images/rowtype1.png';
import rowType2PNG from '../assets/images/rowtype2.png';
import rowType3PNG from '../assets/images/rowtype3.png';
import rowType4PNG from '../assets/images/rowtype4.png';
import rowType5PNG from '../assets/images/rowtype5.png';

export const OneQuarterColumn: (components: Array<WidgetType | null>) => TColumn = (
   components: Array<WidgetType | null>
) => {
   return {
      id: randomId(),
      xs: 12,
      sm: 6,
      md: 3,
      widgets: components.map(type => {
         if (type === null) {
            return null;
         }
         return { id: randomId(), type: type };
      })
   };
};

export const OneThirdColumn: (components: Array<WidgetType | null>) => TColumn = (
   components: Array<WidgetType | null>
) => {
   return {
      id: randomId(),
      xs: 12,
      sm: 12,
      md: 4,
      widgets: components.map(type => {
         if (type === null) {
            return null;
         }
         return { id: randomId(), type: type };
      })
   };
};

export const OneHalfColumn: (components: Array<WidgetType | null>) => TColumn = (
   components: Array<WidgetType | null>
) => {
   return {
      id: randomId(),
      xs: 12,
      sm: 6,
      md: 6,
      widgets: components.map(type => {
         if (type === null) {
            return null;
         }
         return { id: randomId(), type: type };
      })
   };
};

export const FullColumn: (components: Array<WidgetType | null>) => TColumn = (components: Array<WidgetType | null>) => {
   return {
      id: randomId(),
      xs: 12,
      sm: 12,
      md: 12,
      widgets: components.map(type => {
         if (type === null) {
            return null;
         }
         return { id: randomId(), type: type };
      })
   };
};

export const TwoThirdsBiggerColumn: (components: Array<WidgetType | null>) => TColumn = (
   components: Array<WidgetType | null>
) => {
   return {
      id: randomId(),
      xs: 12,
      sm: 12,
      md: 8,
      widgets: components.map(type => {
         if (type === null) {
            return null;
         }
         return { id: randomId(), type: type };
      })
   };
};

export const TwoThirdsSmallerColumn: (components: Array<WidgetType | null>) => TColumn = (
   components: Array<WidgetType | null>
) => {
   return {
      id: randomId(),
      xs: 12,
      sm: 12,
      md: 4,
      widgets: components.map(type => {
         if (type === null) {
            return null;
         }
         return { id: randomId(), type: type };
      })
   };
};

const createRowType1 = (): TRow => {
   return {
      id: randomId(),
      columns: [OneHalfColumn([null]), OneHalfColumn([null])]
   };
};

const createRowType2 = (): TRow => {
   return {
      id: randomId(),
      columns: [OneThirdColumn([null]), OneThirdColumn([null]), OneThirdColumn([null])]
   };
};

const createRowType3 = (): TRow => {
   return {
      id: randomId(),
      columns: [OneQuarterColumn([null]), OneQuarterColumn([null]), OneQuarterColumn([null]), OneQuarterColumn([null])]
   };
};

const createRowType4 = (): TRow => {
   return {
      id: randomId(),
      columns: [TwoThirdsBiggerColumn([null]), TwoThirdsSmallerColumn([null, null])]
   };
};

const createRowType5 = (): TRow => {
   return {
      id: randomId(),
      columns: [OneThirdColumn([null]), OneThirdColumn([null]), OneThirdColumn([null, null])]
   };
};

export const ROW_TYPES: TRowType[] = [
   { name: 'rowtype1', image: rowType1PNG, rowCreator: createRowType1 },
   { name: 'rowtype2', image: rowType2PNG, rowCreator: createRowType2 },
   { name: 'rowtype3', image: rowType3PNG, rowCreator: createRowType3 },
   { name: 'rowtype4', image: rowType4PNG, rowCreator: createRowType4 },
   { name: 'rowtype5', image: rowType5PNG, rowCreator: createRowType5 }
];
