import { expect } from "chai";
import fetch from "node-fetch";
import sinon from "sinon";
import {fetchUsers} from "../index.js";

global.fetch = fetch

describe("Получение пользователей", function(){

    let fetchStub;

    it("сравнение с мокковыми пользователями", async function() {
        const mockUsers = [
            {},
            {}
        ]

        fetchStub = sinon.stub(global, 'fetch').resolves({
            ok: true,
            json: async () => mockUsers
        })
        const users = await fetchUsers();

        expect(fetchStub.calledOnce).to.be.true;
        expect(users).to.deep.equal(mockUsers);
    })

    it("Ответ получен", async () => {
        try{
            await fetchUsers()
        } catch (error){
            expect(error.message).to.equal('Ошибка')
        };
    })
})