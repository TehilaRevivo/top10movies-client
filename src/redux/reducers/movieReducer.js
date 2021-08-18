import produce from 'immer'
import createReducer from './reducerUtils'

const initialState = {
  movies:[{
      name:'dede',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUD66JeEpBbp1HZOnyvYSb0JRdREF5foeQA&usqp=CAU',
      type:'Action',

  },
  {
    name:'David',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUD66JeEpBbp1HZOnyvYSb0JRdREF5foeQA&usqp=CAU',
    type:'Action',

}],
  currentMovie:null
};

const movieReducer = {
  addMovie(state, action) {
    const { movie } = action.payload;
    
  },
  setCurrentMovie(state,action){
    state.currentMovie=action.payload;
  }

};

export default produce((state, action) => createReducer(state, action, movieReducer), initialState);