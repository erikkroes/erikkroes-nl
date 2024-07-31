import * as dotenv from 'dotenv' 
dotenv.config()

const { GITHUB_TOKEN } = process.env


const octokit = new Octokit({
  auth: GITHUB-TOKEN
})

export default async (req, context) => {

  
  await octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', {
    owner: 'erikkroes',
    repo: 'erikkroes-nl',
    workflow_id: 'main.yml',
    ref: 'main',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })


  return;
};