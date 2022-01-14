const Subscription = {
    
    accountUpdated: {
      subscribe: (parent, args, {pubSub}) => {
        return pubSub.asyncIterator("ACCOUNT_UPDATED");
      }
    }
};
  
export default Subscription;
  