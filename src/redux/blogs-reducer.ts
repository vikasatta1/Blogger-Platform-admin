type blogType = {
    id: string,
    name: string,
    description: string,
    websiteUrl: string
}
const initialState = [
    {
        id: "1",
        name: "The best blog in your village",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias atque, consectetur " +
            "consequuntur earum esse laborum laudantium magni," +
            " minima, molestiae mollitia nemo nisi numquam obcaecati " +
            "recusandae rem rerum sed vel?",
        websiteUrl: "https://www.youtube.com/"
    },
    {
        id: "2",
        name: "The Vika",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias atque, consectetur " +
            "consequuntur earum esse laborum laudantium magni," +
            " minima, molestiae mollitia nemo nisi numquam obcaecati " +
            "recusandae rem rerum sed vel?",
        websiteUrl: "https://www.youtube.com/"
    },
    {
        id: "3",
        name: "The best blog in your ",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias atque, consectetur " +
            "consequuntur earum esse laborum laudantium magni," +
            " minima, molestiae mollitia nemo nisi numquam obcaecati " +
            "recusandae rem rerum sed vel?",
        websiteUrl: "https://www.youtube.com/"
    },
    {
        id: "4",
        name: "The e",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias atque, consectetur " +
            "consequuntur earum esse laborum laudantium magni," +
            " minima, molestiae mollitia nemo nisi numquam obcaecati " +
            "recusandae rem rerum sed vel?",
        websiteUrl: "https://www.youtube.com/"
    },
]
type InitialStateType = typeof initialState
export const blogsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD-BLOG': {
            let copyState = [...state]
            const newState = [action.blog, ...copyState]
            console.log(newState)
            return [action.blog, ...copyState]
        }
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
export const setBlogsAC = (blogs: Array<blogType>) => {
    return {type: 'SET-BLOGS', blogs} as const
}
export const addBlogAC = (blog: blogType) => {
    return {type: 'ADD-BLOG', blog} as const
}


//thunk


//type
type ActionsType = ReturnType<typeof setBlogsAC> |
    ReturnType<typeof addBlogAC>