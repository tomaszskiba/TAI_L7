'use strict';

import postDAO from '../DAO/postDAO';


function create(context){
  async function query(){
    let result = await postDAO.query();
    if (result){

    }
  }
  return{
    query:query
  };
}

export default {
  create:create
};