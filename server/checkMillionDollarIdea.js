/**
 Creerai una funzione middleware personalizzata 
 checkMillionDollarIdeache tornerà utile in alcuni 
 percorsi /api/ideas. Questa funzione farà 
 in modo che le idee nuove o aggiornate valgano comunque 
 almeno un milione di dollari! Il valore totale di un'idea 
 è il prodotto delle sue numWeeksproprietà weeklyRevenue.
 */
 const checkMillionDollarIdea = (req, res, next) => {
  const weeklyRevenue = Number(req.body.weeklyRevenue);
  const numWeeks = Number(req.body.numWeeks);
  if (
    (weeklyRevenue * numWeeks < 1000000) ||
    (!weeklyRevenue || !numWeeks) 
  ) {
    res.status(400).send();
  } else {
    next();
  }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
