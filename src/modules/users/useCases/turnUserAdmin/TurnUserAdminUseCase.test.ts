import * as TurnUserAdminUseCase from "./TurnUserAdminUseCase"

// @ponicode
describe("execute", () => {
    let inst: any

    beforeEach(() => {
        inst = new TurnUserAdminUseCase.TurnUserAdminUseCase({})
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.execute({ user_id: "da7588892" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.execute({ user_id: 12345 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.execute({ user_id: "c466a48309794261b64a4f02cfcc3d64" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.execute({ user_id: "bc23a9d531064583ace8f67dad60f6bb" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.execute({ user_id: 9876 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.execute({ user_id: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})
