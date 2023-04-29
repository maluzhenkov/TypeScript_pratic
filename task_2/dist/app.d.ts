declare const posts: {
    id: string;
    title: string;
    body: string;
}[];
interface IPost {
    id: string;
    title: string;
    body: string;
}
type IResultItem<T> = {
    [K in string]: T;
};
interface INormalData<T> {
    byId: IResultItem<T>;
    allIds: string[];
}
declare const normalizeData: (unnormalizedData: IPost[]) => INormalData<IPost>;
declare const result: INormalData<IPost>;
