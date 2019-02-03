import React from 'react';
import TopRepo from './TopRepo.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.

	{props.repos.map(repo => 
		<TopRepo repo = {repo} />)}
	  </div>
	)

export default RepoList;