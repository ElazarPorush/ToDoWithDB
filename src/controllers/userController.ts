
export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        await createUser(req.body)
        res.status(201).json({
            message: "user created"
        })
    } catch (err) {
        res.status(400).json(err)
    }
};

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        
    } catch (err) {
        
    }
}