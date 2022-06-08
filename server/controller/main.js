//quandity change function

export const changeQuandity = (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("Id not valid");
};
