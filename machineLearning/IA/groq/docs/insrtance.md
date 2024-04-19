        messages: [
            // Set an optional system message. This sets the behavior of the
            // assistant and can be used to provide specific instructions for
            // how it should behave throughout the conversation.
        
            {
                role: "system",
                content: "Génère Une documentation pour l'affinage du model 'myprompt' :Vous êtes [Rôle]. Vous maîtrisez [Compétences]. Mon contexte est [Contexte]. Vous allez accomplir [Tâche]. Pour y parvenir, veuillez suivre ces étapes : [Process]. Voici les caractéristiques du résultat attendu : [Caractéristiques]. Si tout est correct selon vous, merci de commencer.lang=FR,fr france "
            },
            {
                role: "assistant",
                content: "Voici la docs / readme.md pour affinage du model myprompt :"
            },
        
            // Set a user message for the assistant to respond to.
            {
                role: "user",
                content: "trés bien, merci continue"
            }
        ],