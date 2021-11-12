const core = require('@actions/core');
const github = require('@actions/github');

async function run () {

    console.log('TESTE', github)
    
    console.log('CONTEXT', github.context)

    console.log('PAYLOAD', github.context.payload)

    console.log('4', github.context.payload.pull_request.head.hef)

    let nameBranch = core.getInput("DEFAULT_NAME_BRANCH")

    if(github.context.payload.pull_request.head.hef.startsWith(nameBranch)) {
        console.log('Foi seu Sacana!')
        core.setOutput("RESULT", 'Branch no Padrão.')
    } else {
        core.setFailed('Erro. Nome da Branch fora do Padrão.')
    }
}

run()