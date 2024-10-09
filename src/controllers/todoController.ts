
export const createToDo = async (req: Request, res: Response): Promise<void> => {
    try {
        await addToDo(req.body)
        res.status(201).json({
            message: "user created"
        })
    } catch (err) {
        res.status(400).json(err)
    }
};

export const getAllTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        
    } catch (err) {
        
    }
}