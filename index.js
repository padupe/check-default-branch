const core = require('@actions/core');
const github = require('@actions/github');

async function run () {
    try{
        let nameBranch = core.getInput("DEFAULT_NAME_BRANCH")
        if(github.context.payload.pull_request.head.ref.startsWith(nameBranch)) {
            core.setOutput("RESULT", 'Branch no Padrão.')
        } else {
            core.setFailed('Erro. Nome da Branch fora do Padrão.')
        }
    } catch {
        core.setFailed('Essa ação só será executada em uma Pull Request.')
    }    
}

run()