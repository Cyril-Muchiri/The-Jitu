import {createNote,getNotes} from './notesController';
import mssql from 'mssql';

const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis()
}
describe('notesController',()=>{
    //scene 1
    describe('create a new Note',()=>{

        it('should create a new note successfully',async()=>{
            const req = {
                body: {
                    title: "The Jitu",
                    content: "Attend Stand up"
                }
            }
           
            const mockedInput=jest.fn().mockReturnThis()
            const mockedExecute=jest.fn().mockResolvedValueOnce({rowsAffected:[1]});
    
            const mockedRequest={
                input:mockedInput,
                execute:mockedExecute
              
            }
            const mocekedPool={
                connected:true,
                request: jest.fn().mockReturnValue(mockedRequest)
            }
            jest.spyOn(mssql,'connect').mockResolvedValue(mocekedPool)
    
            await createNote(req,res)
        

            expect(mockedInput).toHaveBeenCalledWith('title','The Jitu')
            expect(mockedExecute).toHaveBeenCalledWith('createNoteFunc')
            expect(res.json).toHaveBeenCalledWith({
                message: 'New Note created Successfully'
            })
        })
      
    })
    describe('Getting all notes function',()=>{

        it('should get all existing notes successfully',async()=>{
            const mockNotes=[
                { id:"dgfsdfsdfh-dfbjsbdfbds-dsfnjdsfnj",
                title: "The Jitu",
                content:"Attend Stand up"},
                { id:"dgfdvdsfvsddfh-dfbjsbdfbds-dsfnjdsfnj",
                title: "The Maze",
                content:"Attend Sit down"
            }

               
        ]
            const req={}
            
            jest.spyOn(mssql, "connect").mockResolvedValueOnce({
                // connected:true,
                request: jest.fn().mockReturnThis(),
                execute: jest.fn().mockResolvedValueOnce({
                    recordset: mockNotes
                })
            })
            await getNotes(req,res)
            expect(res.status).toHaveBeenCalledWith(200)
            expect(res.json).toHaveBeenCalledWith({notes: mockNotes})
        })

    })
})