import { faker } from '@faker-js/faker'

exports.getNotes = () => {
    const notes = []
    for (let i = 1; i <= 10; i++) {
        notes.push(getFakeNotes(i))
    }
    return notes
}

function getFakeNotes (id) {
    return {
        id,
        title: faker.random.words(3),
        description: faker.random.words(15),
    }
}