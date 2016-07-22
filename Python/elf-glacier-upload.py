import boto3

class glacier(object):

    def __init__(self, vault_name, archive_name):
        """
        Initialize the vault
        """
        
        self.client = boto3.client('glacier')
        
        self.vault_name = vault_name
        self.archive = archive_name

    def create_vault(self, name):
        self.vault = self.client.create_vault(name)

    def get_vault(self, name):
        return self.client.get_vault(name)
        # vault = glacier.Vault('account_id','name')

    
# Uploading an archive
# ====================

    def upload(self, vault):
        # You must keep track of the archive_id
        # self.archive_id = vault.upload_archive(self.archive)
        response = self.client.upload_archive(
            vaultName=self.vault_name,
            archiveDescription='family',
            body=self.archive
        )
        print(response)

# Retrieving an archive
# =====================
    def retrieve(self):
        # You must initiate a job to retrieve the archive
        retrieve_job = vault.retrieve_archive(self.archive_id)
    
        # or if the job is pending (with job_id = retrieve_job.id)
        # retrieve_job = vault.get_job(job_id)

        # You can check if the job is completed either manually, or via Amazon SNS
        if retrieve_job.completed:
            job.download_to_file(self.archive)


    def test_can_list_vaults_without_account_id(self):
        response = self.client.list_vaults()
        print(response)
        
    def run(self):
        #vault = self.get_vault(self.vault_name)
        self.upload(vault)
        
        
        
g = glacier('elf01', 'family.zip')
#g.run()
# g.test_can_list_vaults_without_account_id()
g.upload('foo')

# Here is sample response from calling upload
foo = {
	'archiveId': 'Hs6i-mz6msEQ1w4cr4hldZgJjuBiDa8RWQ_hFc0De1Z5c5ZmBGS4FD_pAUZWGIFaAaMl68chKPeWYhk15HdLVQ_QF3SLWpN80emM3X5rCGp9mRJCwQwwZrLQCCDYgT_abR8No0-cYg', 
	'ResponseMetadata': {
		'HTTPHeaders': {
			'content-length': '2', 
			'content-type': 'application/json', 
			'x-amz-archive-id': 'Hs6i-mz6msEQ1w4cr4hldZgJjuBiDa8RWQ_hFc0De1Z5c5ZmBGS4FD_pAUZWGIFaAaMl68chKPeWYhk15HdLVQ_QF3SLWpN80emM3X5rCGp9mRJCwQwwZrLQCCDYgT_abR8No0-cYg', 
			'location': '/893548089648/vaults/elf01/archives/Hs6i-mz6msEQ1w4cr4hldZgJjuBiDa8RWQ_hFc0De1Z5c5ZmBGS4FD_pAUZWGIFaAaMl68chKPeWYhk15HdLVQ_QF3SLWpN80emM3X5rCGp9mRJCwQwwZrLQCCDYgT_abR8No0-cYg', 
			'x-amz-sha256-tree-hash': 'a5a6229cafe5879e2acbdac08d027c8d01db8a2fcb4b687f017ee6a9d44d451e', 
			'x-amzn-requestid': 'OcaEHRFuTvRSdze6-BsvJQYIcth1K9vgs44mXPbqcWttamU', 
			'date': 'Mon, 18 Jul 2016 17:48:32 GMT'
		}, 
		'RequestId': 'OcaEHRFuTvRSdze6-BsvJQYIcth1K9vgs44mXPbqcWttamU', 
		'HTTPStatusCode': 201
	}, 
	'location': '/893548089648/vaults/elf01/archives/Hs6i-mz6msEQ1w4cr4hldZgJjuBiDa8RWQ_hFc0De1Z5c5ZmBGS4FD_pAUZWGIFaAaMl68chKPeWYhk15HdLVQ_QF3SLWpN80emM3X5rCGp9mRJCwQwwZrLQCCDYgT_abR8No0-cYg', 
	'checksum': 'a5a6229cafe5879e2acbdac08d027c8d01db8a2fcb4b687f017ee6a9d44d451e'
}
