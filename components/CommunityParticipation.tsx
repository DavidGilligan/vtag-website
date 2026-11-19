"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
const paths = [
  {title:"Transparent buying and selling",detail:"Clear vehicle histories, verified evidence and easier handovers for private and trade sales."},
  {title:"Vehicle records and verification",detail:"More useful service, inspection, repair and modification records, with clearer evidence levels."},
  {title:"Clubs and communities",detail:"Find clubs, connect with people and discover local meet-ups and shared expertise."},
  {title:"Ownership tools",detail:"Maintenance reminders, running costs and useful information throughout a vehicle's life."},
];
export default function CommunityParticipation(){
  const [vote,setVote]=useState<number|null>(null);
  const [feedback,setFeedback]=useState("");
  const [copied,setCopied]=useState(false);
  const copy=async()=>{if(!feedback.trim())return;try{await navigator.clipboard.writeText(feedback);setCopied(true)}catch{setCopied(false)}};
  return <>
    <div className="community-vote-grid">{paths.map((p,i)=><button key={p.title} type="button" className={`community-vote-option ${vote===i?'selected':''}`} onClick={()=>setVote(i)} aria-pressed={vote===i}>
      <span className="community-option-index">0{i+1}</span><strong>{p.title}</strong><span>{p.detail}</span><em>{vote===i?<><Check size={17}/> Your preference</>:"Select priority"}</em>
    </button>)}</div>
    <p className="community-disclaimer">Preview voting: your selection is shown on this device only. Public voting and verified results will launch with the community platform.</p>
    <div className="community-feedback"><label htmlFor="community-feedback">What should we improve or build next?</label><textarea id="community-feedback" value={feedback} onChange={e=>{setFeedback(e.target.value);setCopied(false)}} placeholder="Tell us what would make V-TAG more useful to you, your club or your business..." rows={5}/><button type="button" onClick={copy} disabled={!feedback.trim()}><Copy size={18}/>{copied?"Copied — ready to share":"Copy feedback"}</button><p>Feedback submission is coming soon. For now, copy your suggestion to share it through your preferred channel. Nothing is sent or stored by this preview.</p></div>
  </>;
}
