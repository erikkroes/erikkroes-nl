import * as dotenv from 'dotenv' 
import { Octokit, App } from "octokit"
dotenv.config()


const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
})

export default async () => {
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