export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      let index = state.findIndex(quote => quote.id  === action.quoteId)
      let quote = state[index]
      return [
        ...state.slice(0, index), 
        Object.assign({}, quote, {votes: quote.votes + 1}), 
        ...state.slice(index + 1)
      ]
    case 'DOWNVOTE_QUOTE':
      let i = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[i]
      if (quote.votes > 0) {
        return [
          ...state.slice(0, i),
          Object.assign({}, quote, {votes: quote.votes - 1}),
          ...state.slice(i + 1)
        ]
      } else {
        return state
      }

    default:
      return state
  }
}
