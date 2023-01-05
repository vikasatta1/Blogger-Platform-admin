

export type postType ={
    id: string,
    title: string,
    shortDescription: string,
    content: string,
    blogId: string,
    blogName: string,
    createdAt: string
}
const initialState = [
    {
        id: '11',
        title: 'I sell cosmetics',
        shortDescription: 'Blog of beauties',
        content: 'string',
        blogId: 'string',
        blogName: 'string',
        createdAt: '12/12/2022 at 15:46:22'
    },
    {
        id: '2',
        title: 'Let`s fly into space ',
        shortDescription: 'Blog of beauties',
        content: 'string',
        blogId: 'string',
        blogName: 'string',
        createdAt: '12/12/2022 at 15:46:22'
    },
    {
        id: '3',
        title: 'I sell cosmetics',
        shortDescription: 'Blog of beauties',
        content: 'string',
        blogId: 'string',
        blogName: 'string',
        createdAt: '12/12/2022 at 15:46:22'
    },  {
        id: '4',
        title: 'I sell cosmecdfsvtics',
        shortDescription: 'Blog of beauties',
        content: 'string',
        blogId: 'string',
        blogName: 'string',
        createdAt: '12/12/2022 at 15:46:22'
    },
    {
        id: '5',
        title: 'I sell cosmeffftics',
        shortDescription: 'Blog of beauties',
        content: 'string',
        blogId: 'string',
        blogName: 'string',
        createdAt: 'string'
    },
    {
        id: '6',
        title: 'I sell cosmetics333',
        shortDescription: 'Blog of beauties',
        content: 'string',
        blogId: 'string',
        blogName: 'string',
        createdAt: 'string'
    },
]
type InitialStateType = typeof initialState
export const postsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        /* case "SET-BLOGS":{
             return action.todolists.map(tl =>({
                 ...tl,
                 filter:'all'
             }))
         }
         case 'REMOVE-TODOLIST': {
             return state.filter(tl => tl.id !== action.id)
         }
         case 'ADD-TODOLIST': {
             return [{
                 id: action.todolistId,
                 title: action.title,
                 filter: 'all',
                 addedDate: '',
                 order: 0
             }, ...state]
         }
         case 'CHANGE-TODOLIST-TITLE': {
             const todolist = state.find(tl => tl.id === action.id);
             if (todolist) {
                 // если нашёлся - изменим ему заголовок
                 todolist.title = action.title;
             }
             return [...state]
         }
         case 'CHANGE-TODOLIST-FILTER': {
             const todolist = state.find(tl => tl.id === action.id);
             if (todolist) {
                 // если нашёлся - изменим ему заголовок
                 todolist.filter = action.filter;
             }
             return [...state]
         }*/
        default:
            return state;
    }
}
//actions
export const setPostsAC = (blogs: Array<postType>) => {
    return {type: 'SET-POSTS', blogs} as const
}




//thunk


//type
type ActionsType = ReturnType<typeof setPostsAC>